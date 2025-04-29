export const CompleteTodos = (props) => {
    const { compleTodos, onClickReverse } = props;
    return (
        <div className="complete-area">
            <p className="title">完了のTODO</p>
            <ul>
                {compleTodos.map((todo, index) => {
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
    )
}