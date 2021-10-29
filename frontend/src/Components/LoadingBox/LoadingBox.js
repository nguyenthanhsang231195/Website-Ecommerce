import React from 'react';
import "./LoadingBox.css";

export default function LoadingBox() {
  return (
    <div className="loading">
        <i className="fa fa-spinner fa-spin"></i> Loading...
    </div>
  );
}