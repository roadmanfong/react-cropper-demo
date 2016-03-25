// main.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCropper from 'react-cropper';

class Demo extends Component {
  _crop(){
    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }

  render() {
    return (
      <ReactCropper
        ref='cropper'
        src='http://fengyuanchen.github.io/cropper/img/picture.jpg'
        style={{height: 400, width: '100%'}}
        // Cropper.js options
        aspectRatio={16 / 9}
        guides={false}
        crop={this._crop.bind(this)} />
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('example')
);