import React from 'react'
import QueBox from './QueBox';


const FrQue = () => {
    return (
        <>

            <div className="row mt-5">
                <div className="col-sm-10 mx-auto mt-3">
                    <h2 style={{ textAlign: 'center' }}>Frequently asked questions</h2>

                    <div className="que-box">
                        <QueBox
                            head="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                            body="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                            expand = {true}
                        />

                        <QueBox
                            head="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                            body="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                        />

                        <QueBox
                            head="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                            body="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default FrQue;