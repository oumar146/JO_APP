import '../styles/results.css'
import Accordion from 'react-bootstrap/Accordion';


const Results = (props) => {
    return (
        <div className=''>
            <div className='results'>
                {props.submittedQuery && props.faqResults.length > 0 ? (
                    props.faqResults.map(result => (

                        <Accordion defaultActiveKey={result.id}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{result.label}</Accordion.Header>
                                <Accordion.Body>
                                    {result.body}<br /><br />
                                    <a href={result.url} target="_blank" rel="noopener noreferrer">En savoir plus</a>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    ))
                ) : (
                    props.submittedQuery && <p className='no-result'>Aucun résultat trouvé</p>
                )}
            </div>

        </div>
    )
}

export default Results;