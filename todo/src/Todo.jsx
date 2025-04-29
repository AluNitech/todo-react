import { useState } from "react"
import "./style.css"
import { InputTodo } from "./components/InputTodo"
import { IncompleTodos } from "./components/IncompleteTodos"
import { CompleteTodos } from "./components/CompleteTodos"

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
            <InputTodo todoText={todoText} setTodoText={setTodoText} onClick={onClickAdd}/>
            <IncompleTodos incompleTodos={incompleTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>
            <CompleteTodos compleTodos={compleTodos} onClickReverse={onClickReverse}/>
        </div>
    )
}