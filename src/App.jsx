import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

export default function App() {
    const [projectState, setProjectState] = useState({
        selectProjectId: undefined,
        projects: [],
    });
    function handleStartAndProject() {
        setProjectState(prevState => {
            return{
                ...prevState,
                selectProjectId : null
            }
        });
    }
    function handleCancelAndAddProject(){
        setProjectState(prevState => {
            return{
                ...prevState,
                selectProjectId : undefined
            }
        });
    }
    function handeAddProject(project){
        const projectId = Math.random();
        const newProject = {
            ...project,
            id : Math.random()
        }
        setProjectState(
            prevState =>{
                return{
                    ...prevState,
                    selectProjectId : undefined,
                    projects : [...prevState.projects, newProject]
                }
            }
        )
    }
    function handleSelectedProject(id){
        setProjectState(prevState => {
            return{
                ...prevState,
                selectProjectId : id
            }
        });
    }
    function handleDeleteProject(){
        setProjectState(prevState => {
            return{
                ...prevState,
                selectProjectId : undefined,
                projects : projectState.projects.filter((project)=>{project.id !== prevState.selectProjectId})
            }
        });
    }
    const selectedProject = projectState.projects.find( project => project.id === projectState.selectProjectId);
    let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;
    if( projectState.selectProjectId === null ){
        content = <NewProject onAdd={handeAddProject} onCancel={handleCancelAndAddProject}/>
    }else if( projectState.selectProjectId === undefined ){
        content = <NoProject onStartAndProject={handleStartAndProject} onAdd={handeAddProject}/>
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <SideBar 
            onStartAndProject={handleStartAndProject} 
            project={projectState.projects}
            onSelected={handleSelectedProject}
            />
            {content}
        </main>
    );
}
