import { useState } from "react"
import "./style.css"

export const Todo = () => {
    const [todoText, setTodoText] = useState("")
    const [incompleTodos,setIncompleteTodos] = useState(["TODOです１","TODOです２"])
    const [compleTodos,setCompleteTodos] = useState(["TODOでした１","TODOでした２"])

    const onClickAdd = () => {
        if (todoText === "") return;
    
        const newTodos = [...incompleTodos, todoText]
        setIncompleteTodos(newTodos)
        setTodoText("")
    }

    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleTodos]
        newIncompleteTodos.splice(index, 1)
        setIncompleteTodos(newIncompleteTodos)

        const newCompleteTodos = [...compleTodos, incompleTodos[index]]
        setCompleteTodos(newCompleteTodos)
    }

    const onClickDelete = (index) => {
        const newIncompleteTodos = [...incompleTodos]
        newIncompleteTodos.splice(index, 1)
        setIncompleteTodos(newIncompleteTodos)
    }

    const onClickReverse = (index) => {
        const newIncompleteTodos = [...incompleTodos, compleTodos[index]]
        setIncompleteTodos(newIncompleteTodos)
        const newCompleteTodos = [...compleTodos]
        newCompleteTodos.splice(index, 1)
        setCompleteTodos(newCompleteTodos)
    }

    return (
        <div>
            <div className="input-area">
                <input type="text" placeholder="TODOを入力" value={todoText} onChange={(event) => {setTodoText(event.target.value)}}/>
                <button onClick={onClickAdd}>追加</button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTODO</p>
                <ul>
                    {incompleTodos.map((todo,index) => {
                        return (
                            <li key={todo}>
                                <div className="list-row">
                                    <p className="todo-item">{todo}</p>
                                    <button onClick={() => onClickComplete(index)}>完了</button>
                                    <button onClick={() => onClickDelete(index)}>削除</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="complete-area">
                <p className="title">完了のTODO</p>
                <ul>
                    {compleTodos.map((todo,index) => {
                        return (
                            <li key={todo}>
                                <div className="list-row">
                                    <p className="todo-item">{todo}</p>
                                    <button onClick={() => onClickReverse(index)}>戻す</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}