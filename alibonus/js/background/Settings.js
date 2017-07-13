var Info = {
    userId: 0,
    email: '',
    payoutsApproved: 0,
    pending: 0,
    approved: 0,
    wid: 0,
    url: 'http://nfemo.com/click-DQFLI5JV-MKIGQNPP?bt=25&tl=1&sa=bonus',
    // url: 'http://cityadspix.com/click-DQFLI5JV-MKIGQNPP?bt=25&tl=1&sa=bonus',
    // url: 'http://c.cldappru.com/?a=47834&c=93167&p=r&dip=&E=I6uxYpRo6jY%3d&s1=bonus',
    loyaltyProgress: 0,
    loyaltyLevel: 1,
    loyaltyPercent: 7.0,
    photo: '/icons/ava.png',
    token: '',
    isLogged: false
};
//Для popup.js
var Temp = {
    email: '',
    pass: ''
};
var Settings = {
    setUserId: function (userId) {
        Info.userId = userId;
        this.save();
    },
    setEmail: function (email) {
        Info.email = email;
        this.save();
    },
    setPayoutsApproved: function (payoutsApproved) {
        Info.payoutsApproved = payoutsApproved;
        this.save();
    },
    setPending: function (pending) {
        Info.pending = pending;
        this.save();
    },
    setApproved: function (approved) {
        Info.approved = approved;
        this.save();
    },
    setWid: function (wid) {
        Info.wid = wid;
        this.save();
    },
    setUrl: function (url) {
        Info.url = url;
        Info.loyaltyPercentForAliMobile = {
            1: 3.83,
            2: 4.10,
            3: 4.39,
            4: 4.69,
            5: 5.02,
            6: 5.37,
            7: 5.75
        };
        this.save();
    },
    setLoyaltyProgress: function (loyaltyProgress) {
        Info.loyaltyProgress = loyaltyProgress;
        this.save();
    },
    setLoyaltyLevel: function (loyaltyLevel) {
        Info.loyaltyLevel = loyaltyLevel;
        this.save();
    },
    setLoyaltyPercent: function (loyaltyPercent) {
        Info.loyaltyPercent = loyaltyPercent;
        this.save();
    },
    setPhoto: function (photo) {
        Info.photo = photo;
        this.save();
    },
    setToken: function (token) {
        Info.token = token;
        this.save();
    },
    setLogged: function (bool) {
        Info.isLogged = bool;
        this.save();
    },
    load: function () {
        Info = storageGet('info', Info);
    },
    save: function () {
        storageSet('info', Info);
    }
};