import Button from "./Button";

export default function SideBar({onStartAndProject, project, onSelected, selectedProjectId}){
    return(
        <aside className="w-1/3 px-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAndProject}>
                    + Add Project
                </Button>
            </div>
            <ul>
                {project.map(p=>{
                    let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
                    if( p.id === selectedProjectId ){
                        cssClass += " bg-stone-800 text-stone-200"
                    }else{
                         cssClass += " text-stone-400"
                    }
                    return <li className={cssClass} key={p.id}>
                    <button onClick={()=>onSelected(p.id)}>{p.title}</button>
                </li>
                })}
            </ul>
        </aside>
    );
}