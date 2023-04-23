import React, { useState } from 'react'
import Iframe from 'react-iframe';

function CodeSandbox() {
    const [loading, setLoading] = useState(true);

    // func to hide the spinners
    const hideSpinner = () => {
        setLoading(false);

    }

    return (
        <div className='container wrapper'>
            <Iframe url="https://codesandbox.io/embed/stoic-ben-1xshyx?fontsize=14&theme=dark"
                    width='100%'
                    height='720px'
                    title='stoic-ben-1xshyx'
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                      
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />

            {/* {

                    <iframe src="https://codesandbox.io/embed/stoic-ben-1xshyx?fontsize=14&theme=dark"
                        style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                        title="stoic-ben-1xshyx"
                        onLoad={hideSpinner}
                        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>
            } */}
        </div>

    )
}

export default CodeSandbox;