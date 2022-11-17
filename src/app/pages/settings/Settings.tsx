/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React, {FC} from 'react'
import { SettingsWidget } from './SettingsWidget'

const Settings: FC = () => (
<>
      <div>
            {/*begin::Post*/}
            <div className="post d-flex flex-column-fluid" id="kt_post">
                {/*begin::Container*/}
                <div id="kt_content_container" className="container-xxl">
                    {/*begin::Row*/}
                    <div className="row row-cols-12 row-cols-md-12 row-cols-xl-12 g-5 g-xl-12">

                        {/* begin::Row */}
                        <div className='row gy-5 gx-xl-8'>
                            <div className='col-xl-12'>
                                <SettingsWidget className='card-xl-stretch mb-xl-12' />
                            </div>
                        </div>
                        {/* end::Row */}

                    </div>
                    {/*end::Row*/}
                </div>
                {/*end::Container*/}
            </div>
            {/*end::Post*/}
        </div>
        </>  
    )

export { Settings }