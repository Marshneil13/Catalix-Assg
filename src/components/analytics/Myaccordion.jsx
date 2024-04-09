import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import "./analytics.css"
import Mytable from './Mytable';
import Period from './Period';

const Myaccordion = () => {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: "Poppins", fontWeight: "600" }} className='accordion-heading'>
            Pageviews <ExpandMore/>
          </Typography>
          <Typography sx={{ color: 'text.secondary', width:"90%", display:"flex", justifyContent:"flex-end" }}><Period/></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Mytable/>
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default Myaccordion
