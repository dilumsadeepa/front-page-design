import React, { useEffect, useState } from 'react'

const QueBox = ({ head, body, expand = false }) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        setExpanded(expand);
    }, [expand])

    return (
        <>
            <div className="collapsible-textbox">
                <div className="collapsible-head" onClick={toggleExpanded} style={{ color: expanded ? '#6B3CC9' : '#000000' }}>
                    <span className="collapsible-toggle-button">{expanded ?
                        (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                        </svg>) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
                        )}</span>
                    <span style={{ marginRight: 10 }}>{head}</span>

                </div>
                {expanded && <div className="collapsible-body mt-2">{body}</div>}
            </div>

        </>
    )
}

export default QueBox;