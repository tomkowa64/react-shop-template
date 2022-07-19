import React from "react";

interface NewsletterProps {
  IsNewsletterVisible: boolean;
  handleNewsletterVisibilityChange: () => any;
}

export default class Newsletter extends React.Component<NewsletterProps, {}> {
  render() {
    return (
      <div id="newsletter" className="w3-modal display-block">
        <div className="w3-modal-content w3-animate-zoom w3-padding-32">
          <div className="w3-container w3-white w3-center">
            <i
              className="fa fa-remove w3-right w3-button w3-transparent w3-xxlarge"
              onClick={this.props.handleNewsletterVisibilityChange}
            ></i>
            <h2 className="w3-wide">NEWSLETTER</h2>
            <p>
              Join our mailing list to receive updates on new arrivals and
              special offers.
            </p>
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Enter e-mail"
              />
            </p>
            <button
              type="button"
              className="w3-button w3-padding-large w3-red w3-margin-bottom"
              onClick={this.props.handleNewsletterVisibilityChange}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  }
}
