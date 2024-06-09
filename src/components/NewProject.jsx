import { useRef } from "react";
import Input from "./Input";
import Modal from "./Error";

export default function NewProject ({onAdd, onCancel}){
    const modal = useRef();
    let title = useRef();
    let description = useRef();
    let dueDate = useRef();
    function handleSave() {
        const enterTitile = title.current.value;
        const enterDescription = description.current.value;
        const enterDueDate = dueDate.current.value;
        if( enterTitile.trim() === '' || enterDescription.trim() === '' || enterDueDate.trim() === ''){
            modal.current.open();
            return;
        }
        onAdd({
            title : enterTitile,
            description : enterDescription,
            dueDate : enterDueDate
        });
    }
    return(
        <div className="w-[35rem] mt-16">
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="font-bold text-xl text-stone-700 my-4">invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops ... look like forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input feild</p>
            </Modal>
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-600 hover:text-stone-950" onClick={onCancel}>
                        Cancel
                    </button>
                </li>
                <li>
                    <button onClick={handleSave} className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label={"Title"}/>
                <Input ref={description} label={"Description"} textarea/>
                <Input type="date" ref={dueDate} label={"Due Date"}/>
            </div>
        </div>
    );
}