import { useState } from "react";
import type { TodoItemType } from "../../shared/types.ts";

type TodoFormProps = {
    onAdd: (todoItem: TodoItemType) => void;
}

export function TodoForm(props: TodoFormProps) {
    const { onAdd } = props;
    const [label, setLabel] = useState("");

    function handleLabelChange(event: React.ChangeEvent<HTMLInputElement>) {
        setLabel(event.target.value);
    }

    function handleAddClick() {
        const newLabel = label.trim();

        if (newLabel === "") {
            return;
        }

        onAdd({
            id: Date.now(),
            label: newLabel,
            isChecked: false
        });

        setLabel("");
    }

    return (
        <div className="todo-form">
            <input type="text" value={label} onChange={handleLabelChange} />
            <button onClick={handleAddClick}>Добавить задачу</button>
        </div>
    )
}