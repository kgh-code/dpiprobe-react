# dpiprobe-react



React application to query the dpiprobe-server, minimal dependencies - react-table and bulma css.


## Install

You can clone this project in github - its just a javascript project
You need npm to run this project (I have npm installed globally)
To run, move into pulled projecct directory (I installed in ~/dev

 ~/dev git pull https://github.com/kgh-code/dpiprobe-react.git

~/dev cd dpiprobe-react/ npm start
~/dev/dpiprobe-react/ npm install
~/dev/dpiprobe-react/ npm start


## Issues

* Just using props, no react hooks or redux routing
* Memory consumption on display of large data sets
* Usig a global style-sheet - may be requirements for individual styling
* Not happy with the way I build the Axios GET urls - just using string concat
* Mix of managed components and un-managed components
* Using react-table for filtering, sorting of data
* Could not implement calculation of mean dpi as my React Hook for react-table blew up
* Subsequent non-immplementation of React Hook for the version of React-Table
* Same error did not allow me to colourise rows when dpi falls below a certain level
* React table cant handle a single DPI - only a list
* No deployment build 
