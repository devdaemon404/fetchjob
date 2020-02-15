import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Job from './Job';
import JobModal from './JobModal';


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
});

export default function Jobs({ jobs }) {

    //modal
    const [open, setOpen] = React.useState(false);
    const [selectedJob, selectJob] = React.useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //pagination
    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs / 50);

    const classes = useStyles();
    //const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const jobsOnPage = jobs.slice(activeStep * 50, (activeStep * 50) + 50);

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
    return (
        <div>
            <JobModal open={open} job={selectedJob} handleClose={handleClose} />
            <h2 className="display-5">
                Entry level Software jobs
            </h2>
            <h6 className="display-5">
                Found {numJobs} jobs
            </h6>
            <h6 className="display-5">
                Wait for few seconds to load the data into Redis Server and refresh
            </h6>
            <div>
                <div className="row">
                    {
                        jobsOnPage.map((job, i) =>
                            <Job key={i}
                                job={job}
                                onClick={() => { selectJob(job); handleClickOpen(); }}

                            />)
                    }
                </div>
            </div>
            <div>
                Page {activeStep + 1} of {numPages}
            </div>
            <MobileStepper
                variant="progress"
                steps={numPages}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 5} >
                        Next
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
                    </Button>
                }
            />
        </div>
    )
}