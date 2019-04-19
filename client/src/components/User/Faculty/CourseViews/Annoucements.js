import React, { Component } from "react";

export default class Annoucements extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <button
            className="waves-effect waves-light btn modal-trigger"
            data-target="modal1"
          >
            Modal
          </button>
          {/* Modal Structure */}
          <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>Add an Image</h4>
              <div className="row">
                <form className="col s12">
                  <div className="row modal-form-row">
                    <div className="input-field col s12">
                      <input id="image_url" type="text" className="validate" />
                      <label htmlFor="image_url">Image URL</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="image_title"
                        type="text"
                        className="validate"
                      />
                      <label htmlFor="image_title">Title</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        id="image_description"
                        type="text"
                        className="materialize-textarea validate"
                        defaultValue={""}
                      />
                      <label htmlFor="image_description">Description</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <a className=" modal-action modal-close waves-effect waves-green btn-flat">
                Submit
              </a>
            </div>
          </div>
        </div>
        <div />

        <hr />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Alvin</td>
              <td>Eclair</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
