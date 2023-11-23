import '../App.css'
const TodoList = ({ list, remove }) => {
    return (
        <>
            {
                list != 0 ? (
                    <ul className="todo-list">
                        {
                            list.map((todo, index) => (
                                <div className="todo">
                                    <li className="todo-name">
                                        {todo}
                                    </li>
                                    <button className="delete-button"
                                        onClick={() => remove(todo)}
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            ))
                        }
                    </ul>
                ): (
                    <div className="empty">
                        <p>Aucune Tache disponible</p>
                    </div>
                )
            }
        </>
    )
}
export default TodoList