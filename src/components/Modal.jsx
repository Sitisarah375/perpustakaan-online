import React from "react";

import "./Modal.css"

export const Modal = () => {
    return (
        <div className="modal-container">
            <div className="modal">
                <form>
                    <div className="form-group">
                        <label htmlFor="provinsi">Provinsi</label>
                        <input name="provinsi" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="kota">Kota</label>
                        <input name="kota" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="kabupaten">Kabupaten</label>
                        <input name="kabupaten" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="actions">Actions</label>
                        <select name="actions">
                        </select>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </div>

    )
}