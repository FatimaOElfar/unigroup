// import * as React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
// import "./CircularIndeterminate.css";


// export default function CircularIndeterminate() {
//   let progressBar = document.querySelectorAll(".circular-progress");
// let valueContainer = document.querySelectorAll(".value-container");

// let progressValue = 0;
// let progressEndValue = 100;
// let speed = 30;

// for (let i = 0; i < 1; i++) {
//   // const element = valueContainer[i]
//     let progress = setInterval(() => {
//   progressValue++;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar[i].style.background = `conic-gradient(
//       rgba(35, 255, 35, 0.742) ${(progressValue * 3.6)*0.25}deg,
//       #1c3d1c ${(progressValue * 3.6)*0.25}deg
//   )`;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar[i+1].style.background = `conic-gradient(
//       rgba(35, 255, 35, 0.742) ${(progressValue * 3.6)*0.5}deg,
//       #1c3d1c ${(progressValue * 3.6)*0.5}deg
//   )`;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar[i+2].style.background = `conic-gradient(
//       rgba(35, 255, 35, 0.742) ${(progressValue * 3.6)*0.75}deg,
//       #1c3d1c ${(progressValue * 3.6)*0.75}deg
//   )`;
//   valueContainer.textContent = `${progressValue}%`;

//   progressBar[i+3].style.background = `conic-gradient(
//       rgba(35, 255, 35, 0.742) ${progressValue * 3.6}deg,
//       #1c3d1c ${progressValue * 3.6}deg
//   )`;
  
//   if (progressValue == progressEndValue) {
//     clearInterval(progress);
//   }
// }, speed);
// }

//   return (
//     <Box sx={{ display: 'flex' }}>
//       {/* <CircularProgress /> */}
// <div class="progress-box">
//     <div class="Circular-box">
//       <div class="circular-progress">
//         <div class="value-container">0%</div>
//       </div>
//     </div>
//     <div class="Circular-box ms-5">
//       <div class="circular-progress">
//         <div class="value-container">0%</div>
//       </div>
//     </div>
//     <div class="Circular-box ms-5">
//       <div class="circular-progress">
//         <div class="value-container">0%</div>
//       </div>
//     </div>
//     <div class="Circular-box ms-5">
//       <div class="circular-progress">
//         <div class="value-container">0%</div>
//       </div>
//     </div>
//   </div>
//     </Box>
//   );
// }


import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';



function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress style={{color:"green" , height:"8rem" ,width:"8rem"}}
       variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography style={{color:"white"}}
        variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress1, setProgress1] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress1((prevProgress) => (prevProgress >= 25 ? 0 : prevProgress + 1));
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const [progress2, setProgress2] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress2((prevProgress) => (prevProgress >= 50 ? 0 : prevProgress + 1));
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const [progress3, setProgress3] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress3((prevProgress) => (prevProgress >= 75 ? 0 : prevProgress + 1));
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const [progress4, setProgress4] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress4((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return ( 
    <Container className='d-flex flex-row justify-content-center align-items-center'>
    <Card className='d-flex flex-row justify-content-center align-items-center'
     style={{ width: '15rem', backgroundColor:'black', opacity: "0.8",height: "15rem"  , margin: "2rem" }}>
      <Card.Body >
        <Card.Title></Card.Title>
        <Card.Text>
      <CircularProgressWithLabel value={progress1} />
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='d-flex flex-row justify-content-center align-items-center'
     style={{ width: '15rem' , backgroundColor:'black', opacity: "0.8" , height: "15rem" , margin: "2rem" }}>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
      <CircularProgressWithLabel value={progress2} />
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='d-flex flex-row justify-content-center align-items-center'
     style={{ width: '15rem' , backgroundColor:'black', opacity: "0.8" , height: "15rem" , margin: "2rem" }}>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
      <CircularProgressWithLabel value={progress3} />
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='d-flex flex-row justify-content-center align-items-center'
     style={{ width: '15rem' , backgroundColor:'black', opacity: "0.8" , height: "15rem" , margin: "2rem" }}>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
      <CircularProgressWithLabel value={progress4} />
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  )
}