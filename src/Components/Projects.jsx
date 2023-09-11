import React from 'react';
import styled from 'styled-components';
import dnalp from '../Resources/Images/Project/sephora.png';
import gearbestlp from '../Resources/Images/Project/tripoto.png';
import senselp from '../Resources/Images/Project/travelgo.png';
import sugarlp from "../Resources/Images/Project/skinstore1.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import StreamIcon from '@mui/icons-material/Stream';


const Projects = () => {

    const projects = [
        // {
        //     id: 1,
        //     title: 'Tripadvisor',
        //     img: senselp,
        //     desc: 'Tripadvisor is an online travel company that operates a website and mobile app with user-generated content and a comparison shopping website. It also offers online hotel reservations and bookings for transportation, lodging, travel experiences,',
        //     worked: 'This is an Group project. It was completed in 5 days',
        //     keyPoint2: '',
        //     keyPoint1: '',
        //     deployedLink: 'https://cheery-dasik-4fae30.netlify.app/',
        //     githubLink: 'https://github.com/sushantkr961/Tripadvisor-Clone',
        //     tags: ['React', 'nade', 'Express', "MongoDb"]
        // },
        {
            id: 2,
            title: 'SkinStore Clone',
            img: sugarlp,
            desc: "Skinstore is a multinational retailer of personal care and beauty products. Featuring nearly 340 brands, along with its own private label, Skinstore Collection, skinstore offers beauty products including cosmetics, skincare, body, fragrance, nail color,",
            worked: 'A Indiviual project, built in 5 days .',
            keyPoint2: '',
            keyPoint1: '',
            githubLink: 'https://github.com/BSRINU1996/skinstore_clone.git',
            deployedLink: 'https://wondrous-tapioca-f0ee85.netlify.app/login',
            tags: ['HTML', 'CSS', 'Javascript', 'React', 'Chakra-ui']
        },
        // {
        //     id: 3,
        //     title: 'Sephora Clone',
        //     img: dnalp,
        //     desc: 'Sephora is a e-commerce multinational retailer of personal care and beauty products. Sephora Collection, Sephora offers beauty products including cosmetics, skincare, body, fragrance, nail color, beauty tools, body lotions and haircare',
        //     worked: 'A collaborative project, built in 5 days by a team of 5 developers.',
        //     keyPoint2: 'This is our first project at Masai School.',
        //     keyPoint1: 'Group project',
        //     githubLink: 'https://github.com/erGaurav13/Sephore-Clone',
        //     deployedLink: 'https://sephora-nnnow-masai.netlify.app/homepage.html',
        //     tags: ['HTML', 'CSS', 'Javascript']
        // },
        // {
        //     id: 4,
        //     title: 'Tripoto',
        //     img: gearbestlp,
        //     desc: 'Tripoto is social travel platform to share and discover travel experiences, stories, community, tourism guides, hotels and holidays.',
        //     worked: 'This is an Group project completed in 5 days.',
        //     keyPoint1: 'Express server used',
        //     keyPoint2: '',
        //     githubLink: 'https://github.com/shekhar74/meek-calculator-9744',
        //     deployedLink: 'https://chic-syrniki-568fa1.netlify.app/',
        //     tags: ['Node', 'Express', 'Mongodb', 'Reactjs', 'Chakra-Ui']
        // }
    ]

    return (
        <Container id='projects'>
            <h1>Projects</h1>
            <div className='project-container'>
                {projects.map((ele, index) => (
                    <div key={index} className="project-card">
                        <div className='imgBox'>
                            <img src={ele.img} alt={ele.title} width='120%' height='100%' />
                        </div>
                        <div className='ContentBox'>
                            <h1 className="project-title">{ele.title}</h1>
                            <p className="project-description">{ele.desc}</p>
                            <p style={{ fontWeight: 'bold' }}>{ele.worked}</p>
                            <div className='project-tech-stack'>
                                {ele.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className='linkSection'>
                                <a className="project-github-link" href={ele.githubLink} rel="noreferrer" target="_blank"><button><GitHubIcon />Github</button></a>
                                <a className="project-deployed-link" href={ele.deployedLink} rel="noreferrer" target="_blank"><button><StreamIcon />Live</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container >
    )
}


const Container = styled.div`
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
    
    h1{
        color:#343a40;
        text-transform:uppercase;
    }

    .project-container{
        width:80%;
        margin:auto;
        display:flex;
        align-items:center;
        flex-direction:column;
    }

    .project-card{
        position:relative;
        width:100%;
        height:450px;
        display:flex;
        gap:10px;
        margin-bottom:80px;
        border: 10px solid lightgrey;
        border-radius: 20px;
        overflow:hidden;
    }

    .imgBox{
        width:50%;
        overflow:hidden;
    }

    
    .imgBox>img{
        display: block;
        transition: transform .4s; 
        width:100%;
    }

    // .imgBox>img:hover{
    //     position:absolute;
    //     width:80%;
    //     transform: scale(1.3);
    //     transform-origin: 0% 0%;
    // }

    
    .ContentBox{
        width:50%;
        text-align:left;
        padding:0px 20px 20px 20px;
        
    }

    .ContentBox>h1{
        color:#222e50;
    }

    .ContentBox>p{
        width:90%;
        font-size:large;
        margin-top:0px;
    }

    .project-tech-stack{
        width:80%;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        line-height:20px;
        gap:5px;
        margin-bottom:20px;
    }

    .project-tech-stack>span{
        color:white;
        background-color:#222e50;
        padding: 2px 15px 2px 15px;
        border-radius:10px;
        font-size:13px;
        font-weight:bold;
    }


    .linkSection{
        display:flex;
        gap:20px;
    }

    .linkSection>a{
        text-decoration:none;
    }
    .linkSection>a:first-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        border:none;
        cursor:pointer;
    }

    button{
        cursor:pointer;
    }

    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    

    .linkSection>a:last-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        border:none;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
    }

    @media only screen and (min-width: 768px) and (max-width:1120px){
        .project-card{
            flex-direction:column;
            align-items:center;
            height:100%;
        }
 
        .project-container{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:400px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .project-tech-stack{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        .project-card{
           flex-direction:column;
           align-items:center;
           height:100%;
        }

        .project-container{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:280px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .project-tech-stack{
            width:100%;
            justify-content:center;
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .project-card{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .project-container{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:200px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
            
        }


        .project-tech-stack{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (max-width: 319px){
        .project-card{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .project-container{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:150px;
        }

        .imgBox>img{
            width:100%;
            
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
        }


        .project-tech-stack{
            width:100%;
            justify-content:center;
        }
    }
`
export default Projects