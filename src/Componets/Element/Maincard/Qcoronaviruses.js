import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../../Assets/Css/Qcoronaviruses.scss";

const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%",
   },
   heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
   },
}));

function Qcoronaviruses() {
   const classes = useStyles();
   return (
      <div>
         <div className="Qcoronaviruses-wrapper">
            <div className="Qcoronaviruses-tittle">
               <h4>Q&A on coronaviruses (COVID-19)</h4>
            </div>
            <div className="Qcoronaviruses-Accordion">
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                  >
                     <Typography className={classes.heading}>
                        What is a Coronavirus ?
                     </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography>
                        Coronaviruses are a large family of viruses which may
                        cause illness in animals or humans. In humans, several
                        coronaviruses are known to cause respiratory infections
                        ranging from the common cold to more severe diseases
                        such as Middle East Respiratory Syndrome (MERS) and
                        Severe Acute Respiratory Syndrome (SARS). The most
                        recently discovered coronavirus causes coronavirus
                        disease COVID-19.
                     </Typography>
                  </AccordionDetails>
               </Accordion>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel2a-content"
                     id="panel2a-header"
                  >
                     <Typography className={classes.heading}>
                        What is a COVID-19 ?
                     </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography>
                        Coronaviruses (CoV) are a large family of viruses that
                        cause illness ranging from the common cold to more
                        severe diseases such as Middle East Respiratory Syndrome
                        (MERS-CoV) and Severe Acute Respiratory Syndrome
                        (SARS-CoV). A novel coronavirus (nCoV) is a new strain
                        that has not been previously identified in humans.
                        Coronaviruses are zoonotic, meaning they are transmitted
                        between animals and people. Detailed investigations
                        found that SARS-CoV was transmitted from civet cats to
                        humans and MERS-CoV from dromedary camels to humans.
                        Several known coronaviruses are circulating in animals
                        that have not yet infected humans.
                     </Typography>
                  </AccordionDetails>
               </Accordion>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel2a-content"
                     id="panel2a-header"
                  >
                     <Typography className={classes.heading}>
                        What are the symptoms of COVID-19?
                     </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography>
                        People with COVID-19 have had a wide range of symptoms
                        reported – ranging from mild symptoms to severe illness.
                        Symptoms may appear 2-14 days after exposure to the
                        virus. Anyone can have mild to severe symptoms. People
                        with these symptoms may have COVID-19: Fever or chills
                        Cough Shortness of breath or difficulty breathing
                        Fatigue Muscle or body aches Headache New loss of taste
                        or smell Sore throat Congestion or runny nose Nausea or
                        vomiting Diarrhea This list does not include all
                        possible symptoms. CDC will continue to update this list
                        as we learn more about COVID-19. Older adults and people
                        who have severe underlying medical conditions like heart
                        or lung disease or diabetes seem to be at higher risk
                        for developing more serious complications from COVID-19
                        illness.
                     </Typography>
                  </AccordionDetails>
               </Accordion>
            </div>
         </div>
      </div>
   );
}

export default Qcoronaviruses;
