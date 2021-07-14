import React, { Component } from 'react';
import './index.css';

class IconItems extends Component {
    render() {
        return (
            <svg className={"items-icon " + (this.props.className ? this.props.className:"")} version="1.1" viewBox="0 0 511.998 511.998">
                <path d="M463.388,82.496c3.857,1.362,7.957,2.074,12.169,2.074c9.738,0,18.893-3.792,25.78-10.679
                    c14.215-14.217,14.215-37.347,0-51.564c-14.217-14.214-37.346-14.213-51.561,0c-6.887,6.887-10.68,16.042-10.68,25.781
                    c0,4.211,0.712,8.313,2.074,12.169l-41.347,18.152l-10.051,14.074l-27.471-27.471l-21.286,21.286l29.245,29.245l-41.927,41.927
                    c-16.992-5.469-36.408-9.876-57.283-11.363v76.464c13.541,1.486,27.647,4.926,42.123,10.302l11.047,4.102l-1.331,11.707
                    c-5.867,51.618-21.778,97.35-47.293,135.926c-1.477,2.233-3.003,4.436-4.546,6.617v109.087
                    c12.026-8.834,37.335-29.801,62.547-65.603c7.665-10.886,14.72-22.302,21.151-34.186l88.183,86.929l34.058-3.784l3.784-34.058
                    L377.9,348.217c0.88-2.494,1.743-4.997,2.575-7.519c14.041-42.592,21.161-89.367,21.161-139.026v-7.824l-6.404-4.495
                    c-0.696-0.489-5.75-3.988-14.267-8.809l27.139-27.139l29.245,29.245l21.286-21.286l-27.471-27.471l14.073-10.052L463.388,82.496z"/>
                <path d="M240.947,222.577v-76.451c-20.641,1.471-39.858,5.795-56.713,11.18l-42.421-41.818l29.169-29.169l-21.286-21.286
                    l-27.471,27.471L112.172,78.43L70.826,60.278c1.362-3.857,2.074-7.957,2.074-12.169c0-9.739-3.792-18.894-10.679-25.78
                    c-14.215-14.215-37.345-14.215-51.561,0c-14.214,14.216-14.214,37.346,0,51.561c6.886,6.887,16.042,10.679,25.78,10.679
                    c4.211,0,8.312-0.712,12.169-2.074l18.152,41.347l14.074,10.053l-27.471,27.471l21.286,21.286l29.321-29.321l27.409,27.019
                    c-8.728,4.922-13.908,8.509-14.613,9.005l-6.404,4.495v7.824c0,49.658,7.12,96.434,21.161,139.026
                    c1.119,3.396,2.295,6.757,3.502,10.101L33.709,452.114l3.784,34.058l34.058,3.784l87.011-87.011
                    c6.076,11.021,12.689,21.634,19.836,31.783c25.213,35.802,50.52,56.768,62.548,65.603V391.244
                    c-1.545-2.185-3.072-4.389-4.545-6.617c-25.526-38.591-41.44-84.346-47.301-135.993l-1.329-11.704l11.042-4.102
			        C213.226,227.473,227.337,224.049,240.947,222.577z"/>
                <path d="M255.999,251.842c-11.183,0-23.048,1.828-35.403,5.446c5.708,38.13,17.585,72.346,35.403,101.995
			        c17.809-29.631,29.683-63.831,35.395-101.937C278.965,253.69,267.099,251.842,255.999,251.842z"/>
            </svg>
        );
    }
}

export default IconItems;