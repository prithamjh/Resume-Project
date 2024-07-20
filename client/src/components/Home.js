import React from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchData, setData } from '../redux/actionCreators';

import "./stylesheets/home.scss";


const Home = (props) => {

    const history = useHistory();

    //const [title, setTitle] = React.useState('');



    React.useEffect(() => {
        if (props.token) {
            props.fetchData(props.token, function () {
                //history.push("/builder")
            })
        }
    }, []) //eslint-disable-line

    // const handleChange = (event) => {
    //     setTitle(event.target.value);
    //     props.setData(event.target.value, function () {
    //         history.push("/builder")
    //     })
    // };

    const handleClick = () => {
        props.setData(-1, function () {
            history.push("/builder")
        })
    };

    const publicURL = process.env.PUBLIC_URL;

    return (

        <div className="page-wrapper">

            <div className="main container-fluid">

                <section className="top row d-flex" >
                    <div className="col-sm left">
                        <div className=" heading-content align-middle">
                            <span className="main-heading">Build your resume today</span>
                            <br></br>
                            <span className="main-subheading">Build a resume tailored to your needs</span>
                        </div>
                        <br></br>
                        <div>
                            <button className="btn btn-primary btn-lg" style={{ backgroundColor: "#fe8c26"}} onClick={handleClick}>BUILD MY RESUME</button>
                        </div>
                    </div>
                    <div className="col-sm right new">
                        <img src={publicURL + "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/283685515/original/6f5fe15ac6cc54febe1db87fdf89c17fdae2a01e/write-a-professional-resume-and-cv.jpg"} alt=" resume" />
                    </div>
                </section>
                <section className="start1">
                <div className="start-heading1">
    <span>How to Start?</span>
  </div>
  <div className="new2">
    <div className="new1">
      <div className="card-heading">1</div>
      <div className="card-body">
        <h5 className="card-title">Fill the form</h5>
        <p className="card-text">Fill out your details in <strong>6</strong> easy steps</p>
      </div>
    </div>
    <div className="new1 new4">
      <div className="card-heading">2</div>
      <div className="card-body">
        <h5 className="card-title">Choose template</h5>
        <p className="card-text">Choose a template from provided templates</p>
      </div>
    </div>
    <div className="new1 new3">
      <div className="card-heading">3</div>
      <div className="card-body">
        <h5 className="card-title">Download Resume</h5>
        <p className="card-text">That's it! Now you can download your resume in pdf form</p>
      </div>
    </div>
  </div>
</section>
               

                <section className="features ">

                    <div className="features-heading "><h1>Features</h1></div>

                    <div className="features-content align-items-center justify-content-center ">



                        <div className="wrapper row">

                            <div className="text-content col-sm">
                                <div className="heading">Blazingly Fast</div>
                                <div className="text">
                                    With out easy to use services you can build
                                    your resume in less than 10 minutes
                                    </div>
                            </div>

                            <div className="image-content col-sm">
                                <img src={publicURL + '/assets/fast.svg'} alt="fast" />
                            </div>

                        </div>


                        <div className="wrapper row">
                            <div className="image-content col-sm">
                                <img src={publicURL + '/assets/plan.svg'} alt="template" />

                            </div>

                            <div className="text-content col-sm">
                                <div className="heading">Ready to use templates</div>
                                <div className="text">
                                    We provide multiple ready to use templates to
                                    speed up resume building process
                                    </div>
                            </div>
                        </div>



                        <div className="wrapper row">
                            <div className="text-content col-sm">
                                <div className="heading">Free of Cost</div>
                                <div className="text">
                                    We do not charge you any money for our services
                                        <br></br>
                                        But we encourage you to donate, it keeps our services running
                                    </div>
                            </div>

                            <div className="image-content col-sm">
                                <img src={publicURL + '/assets/payment.svg'} alt="money" />
                            </div>
                        </div>


                        <div className="wrapper row">
                            <   div className="image-content col-sm">
                                <img src={publicURL + '/assets/design.svg'} alt="design" />
                            </div>
                            <div className="text-content col-md">
                                <div className="heading">Design your own resume</div>
                                <div className="text">
                                    With our easy to use services you can create resume best suited to your needs
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="build-wrapper ">
                    <div className="build-resume align-items-center justify-content-center">
                        <button className="btn btn-primary btn-lg" onClick = {handleClick}>BUILD MY RESUME</button>
                    </div>
                </section>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        token: state.resume.token,
        data: state.resume.data
    }
}

const mapDispatchToProps = dispatch => ({
    fetchData: (props, callback) => { dispatch(fetchData(props, callback)) },
    setData: (props, callback) => { dispatch(setData(props, callback)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);