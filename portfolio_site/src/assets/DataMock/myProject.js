import video1 from "../Video/toDoList.mp4"
import video2 from "../Video/weather.mp4"
import video3 from "../Video/kcalendarPres.mp4"

const projectsData = [
    {
        projCategory: "ToDo List",
        projects: [
            {
                projName: "ToDo List",
                projDesc: "Descrizione",
                projVideo: video1
            }
        ]
    },
    {
        projCategory: "Web App",
        projects: [
            {
                projName: "Web App",
                projDesc: "Descrizione",
                projVideo: video2
            }
        ]
    },
    {
        projCategory: "Website",
        projects: [
            {
                projName: "Website",
                projDesc: "Descrizione",
                projVideo: video3
            }
        ]
    }
]

export default projectsData;