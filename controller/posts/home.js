const home =  (req, res) => {
    res.status(200).json({status:200, message: 'welcome to my Website.'});
}

export default home;