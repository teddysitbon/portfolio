import React, { Component } from 'react';
import Project from './Project';
import '../assets/App.css';

class WorkPage extends Component {

    constructor() {
        super();
        this.state = {
            projects: [
                {
                    name:"Todo App",
                    title:"ReactJS Project",
                    skills: ["Creating new tasks","Validating fields","Saving data to the local storage", "Filtering tasks (completed, active, all). Make use of filter and reduce functions"],
                    href : "https://github.com/teddysitbon/todo"
                },{
                    name:"WTTJ Exercise",
                    title:"Slider",
                    skills: ["Dynamic slider", "Responsive", "'Swiping' implementation"],
                    href : "https://github.com/teddysitbon/wttj"
                },{
                    name:"Portfolio",
                    title:"This website",
                    skills: ["Routing transition", "Love for beautiful integration"],
                    href : "https://github.com/teddysitbon/MyNewWebsite"
                }
            ]
        };
    }

    componentDidUpdate(){
        window.scrollTo(0, 0);
    }

    render() {
        const allProject = this.state.projects.map(function(project, index){
            return (
                <Project
                    key={index}
                    name={project.name}
                    title={project.title}
                    skills={project.skills}
                    href={project.href}
                    position={index + 1}
                />
            );
        });
        return (
            <div>
                <section className='fullScreen workPage'>
                    <div className='backgroundWords'>
                        <div className="firstLine"><span>Work.</span><span>Work.</span><span>Work.</span></div>
                        <div className="secondLine"><span>Work.</span><span>Work.</span></div>
                        <div className="thirdLine"><span>Work.</span><span>Work.</span></div>
                    </div>
                    <div className="descriptionEntete">
                        <span className="namePage">Mes Projets</span>
                        <span className="textDescriptionPage"><span><span className="colorVioletBold">Scroll</span> pour<br/>les découvrir.</span></span>
                    </div>
                    <div className="scrollBottom">
                        <i dangerouslySetInnerHTML={{__html: "<svg id='scrollSVG' x='0px' y='0px' viewBox='0 0 368.416 368.416' style='enable-background:new 0 0 368.416 368.416;' ><path d='M240.404,59.633c2.517,0,5.031-0.949,6.971-2.838v37.364c0,5.523,4.477,10,10,10c5.523,0,10-4.477,10-10V56.795   c3.914,3.81,10.169,3.781,14.041-0.091c3.905-3.905,3.906-10.237,0.001-14.142l-16.97-16.971c-1.875-1.875-4.419-2.929-7.071-2.929   c-2.652,0-5.196,1.054-7.071,2.929l-16.971,16.971c-3.905,3.905-3.905,10.237,0,14.143   C235.286,58.657,237.845,59.633,240.404,59.633z'/><path d='M338.892,70.117c-3.873-3.873-10.129-3.9-14.042-0.091V32.662c0-5.523-4.477-10-10-10c-5.523,0-10,4.477-10,10v37.365   c-3.913-3.81-10.169-3.783-14.043,0.09c-3.905,3.905-3.905,10.237,0,14.142l16.971,16.971c1.953,1.953,4.512,2.929,7.071,2.929   c2.559,0,5.119-0.977,7.071-2.929l16.971-16.971C342.796,80.354,342.796,74.022,338.892,70.117z'/><path d='M271.941,154.193c-5.573,0-11.22,1.072-16.508,3.065c-7.351-14.431-22.344-24.338-39.604-24.338   c-6.153,0-12.015,1.165-17.344,3.271c-7.494-14.005-22.274-23.558-39.244-23.558c-4.251,0-8.415,0.594-12.393,1.743   c0.003-4.148,0.006-8.402,0.009-12.671l0.03-41.446c0.008-11.29,0.012-16.444-0.035-19.073h0.045   c0-11.625-5.34-22.752-14.651-30.529C124.02,3.785,113.509,0,102.653,0C78.131,0,58.182,19.95,58.182,44.472v135.569   c-16.375,5.479-30.829,20.592-31.436,42.169c-0.95,33.753,1.817,76.463,31.894,107.397c25.39,26.115,65.127,38.809,121.481,38.809   c50.684,0,88.169-14.908,111.414-44.311c16.326-20.651,24.956-48.48,24.956-80.48l-0.078-44.995   C316.413,174.143,296.462,154.193,271.941,154.193z M180.121,348.416c-119.309,0-135.216-60.477-133.383-125.644   c0.442-15.717,13.954-25,25-25v28.823c0,3.625,2.514,4.047,3.264,4.047s3.18-0.412,3.18-4.038c0-3.499,0-182.132,0-182.132   C78.182,30.957,89.138,20,102.653,20c12.401,0,24.246,8.958,24.246,21.188c0.008,0.045-0.064,89.86-0.076,111.957   c-0.001,0.046-0.014,0.089-0.014,0.135v4.617c0,2.201,1.785,3.985,3.986,3.985c2.2,0,3.984-1.784,3.984-3.985v-1.194   c0.217-13.328,11.083-24.067,24.463-24.067c13.515,0,24.472,10.957,24.472,24.473l0.019,17.721c0,2.168,1.757,3.925,3.925,3.925   c2.167,0,3.923-1.757,3.923-3.925l-0.008-1.014c0-12.305,11.957-20.894,24.256-20.894c13.517,0,24.422,10.956,24.422,24.472   l0.049,17.937c0,2.109,1.71,3.819,3.819,3.819c2.109,0,3.818-1.71,3.818-3.819l-0.014-1.365c0-11.19,12.108-19.77,24.017-19.77   c13.514,0,24.472,10.957,24.472,24.472l0.078,44.96C296.491,285.44,280.228,348.416,180.121,348.416z'/></svg>"}}></i>
                    </div>
                </section>
                <section className="allProjects minFullScreen">
                    <div className="container">
                        <ul className="listProjects">
                            {allProject}
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}
export default WorkPage;
