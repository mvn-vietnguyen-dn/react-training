import { Component } from "react";

import { IListItem } from "./type";

import data from "./data.json";

interface ListState {
  listItems: IListItem[];
}

class List extends Component<{}, ListState> {
  state: ListState = {
    listItems: data?.items,
  };

  deleteItem(idx: number) {
    const newListItems = [...this.state.listItems];
    newListItems.splice(idx, 1);
    this.setState({ listItems: newListItems } as ListState);
  }

  render() {
    const { listItems } = this.state;

    return (
      <ul className="list-content">
        {listItems?.length ? (
          <>
            {listItems?.map((item: IListItem, idx: number) => (
              <li className="list-item" key={item?.id}>
                <div
                  className="list-item-header"
                  style={{ backgroundColor: item?.color }}
                ></div>
                <div className="list-item-content">
                  <h3 className="list-item-title">{item?.title}</h3>
                  <p className="list-item-description">{item?.description}</p>
                </div>
                <i
                  className="list-item-delete-icon fas fa-times"
                  onClick={() => this.deleteItem(idx)}
                ></i>
              </li>
            ))}
          </>
        ) : (
          <h2>You no have any item.</h2>
        )}
      </ul>
    );
  }
}

export default List;
