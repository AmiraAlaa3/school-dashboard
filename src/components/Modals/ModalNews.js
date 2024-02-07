import React, { useState } from 'react'
import BasicDatePicker from '../Buttons/AddDate';
import ModalButtons from '../Buttons/ModalButtons';
import styles from './Modal.module.css';
export default function ModalNews() {
  const [newImg, setNewImg] = useState(null);

  function getPicture(e) {
    let picture = e.target.value;
    setNewImg(picture);
  }
  return (
    <div className="modal fade" id="Add-new-model" tabIndex="-1" aria-labelledby="Add-news" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="Add-postModalLabel">Add New</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="new-title" className="col-form-label">Add title</label>
              <input type="text" className="form-control" id="new-title"/>
            </div>
            <div className="mb-3">
              <label htmlFor="new-description" className="col-form-label">Add description</label>
              <input type="text" className="form-control" id="new-description"/>
            </div>
            <div className="mb-3">
                <label className='w-100' htmlFor="new-img">
                  <p className='mb-2'>Add image</p>
                    <div className={`${styles.upload} mt-1 border rounded-1 d-flex align-items-center justify-content-between`}>
                          <p className='mb-2 p-2'>{newImg ? newImg : 'Upload picture'}</p>
                         <div className={`w-25 p-2 ${styles.uploadBtn}`}><i className="fa-solid mx-2 fa-upload"></i>Upload</div>
                    </div>
                </label>
                <input onChange={getPicture} placeholder="Upload picture" name="new-img" id='new-img' className="form-control mt-1 py-2 d-none" type="file" />
            </div>
            <div className="mb-3">
              <label htmlFor="new-Date" className="col-form-label">Add Date</label>
              <BasicDatePicker/>  
            </div>
          </form>
        </div>
         <ModalButtons/>
      </div>
    </div>
  </div>
  )
}
