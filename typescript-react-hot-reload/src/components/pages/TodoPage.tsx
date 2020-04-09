import * as React from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import { Card, Table, Button, Modal, Input } from "antd";
import { TodoItem } from "../model/TodoItem";
import { IState } from "../store/configStore";
import { actionCreators } from "../actions/actions";
import TextArea from "antd/lib/input/TextArea";

const { Column } = Table;

interface ITodoProps {
  todoItems: TodoItem[];
  actions?: any;
}

interface ITodoState {
  modalVisible: boolean;
  newTaskName: string;
}

class TodoPageComponent extends React.Component<ITodoProps, ITodoState> {

  // private childRef = React.createRef<any>();
  private childRef = React.createRef<TextArea>();

  constructor(props: ITodoProps) {
    super(props);
    this.state = {
      modalVisible: false,
      newTaskName: "",
    };
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div>
        <Card bordered title="Todo List" style={{ margin: "16px 16px" }}>
          <Button type="primary" icon="plus"
            onClick={() => { this.setState({ modalVisible: true }); }}>New Task</Button>
          <Table dataSource={this.props.todoItems}>
            <Column title="Id" dataIndex="id" key="id"></Column>
            <Column title="Task" dataIndex="name" key="name"></Column>
            <Column title="Status" dataIndex="isCompleted" key="isCompleted"
              render={(text: any, record: TodoItem, index: number) => {
                return <span>{record.isCompleted ? "Completed" : "Pending"}</span>;
              }}></Column>
            <Column title="Action" key="action" render={(text: any, record: TodoItem, index: number) => (
              <div>
                <Button type="primary" disabled={record.isCompleted}
                  onClick={() => {
                    record.isCompleted = true;
                    this.props.actions.completeTodoAction(record);
                  }}>Complete</Button>
                <Button type="link" 
                  onClick={() => {
                    this.props.actions.removeTodoAction(index)
                  }}>Delete</Button>
              </div>
            )} />
          </Table>
        </Card>
        <Modal title="New Task" visible={this.state.modalVisible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}>
          <Input.TextArea placeholder="Input the name of the task" rows={4}
            value={this.state.newTaskName}
            ref={this.childRef}
            onChange={(e) => {
              this.setState({ newTaskName: e.target.value });
            }} />
        </Modal>
      </div>
    );
  }

  private handleOk = () => {
    const item: TodoItem = {
      id: 0,
      key: 0,
      name: this.state.newTaskName,
      isCompleted: false,
    };
    this.props.actions.addTodoAction(item);
    this.setState({ 
      modalVisible: false,
      newTaskName: ''
    });
  }
  private handleCancel = () => {
    console.log(this.childRef.current);
    this.setState({ 
      modalVisible: false,
      newTaskName: ''
    });
  }
}

const mapStateToProps = (state: IState): ITodoProps => {
  return {
    todoItems: state.todos,
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => {
  return {
    actions: Redux.bindActionCreators(actionCreators, dispatch),
  };
};

export const TodoPage = connect<ITodoProps>(mapStateToProps, mapDispatchToProps)(TodoPageComponent);
