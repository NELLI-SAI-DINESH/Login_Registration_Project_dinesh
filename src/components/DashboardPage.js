import React from "react";
import "../css/dashBoard.css"

const DashboardPage = () => {
    //const navigate = useNavigate();
    return(
        <>
            <div className="dashboard-container">

                <h1 className="dashboard-welcomeMsg">Welcome to Dashboard
                    <h3 className="dashboard-welcomeMsg">
                        {/* We always provides you an amazing and pleasent STAY
                        <br/><br/>With your friends and familyat reasonable prices.
                        <br/><br/>We provide well-designed space with modern amenities.
                        <br/><br/>you can reserve a room faster with our efficient DINESH STAY app
                        <br/>Enjoy your stay. */}
                        You Successfully Logged In
                    </h3>
                </h1>

            </div>

            {/* <button onClick={() => navigate(-1)}> Logout </button> */}
        </>
    );
}

export default DashboardPage;