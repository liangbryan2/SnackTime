const db = require('../models');

module.exports = {

/************student**************/
  getAllStudents: function(req, res) {
    db.Student.findAll({
      order: [['name', 'ASC']]
    })
      .then(dbStudents => res.json(dbStudents))
      .catch(err => res.status(422).json(err));
  },

  saveStudent: function(req, res) {
    db.Student.create({
      name: req.body.name,
      address: req.body.address,
      dob: req.body.dob,
      notes: req.body.notes,
      allergies: req.body.allergies,
      medication: req.body.medication,
      doctor: req.body.doctor,
      OrganizationId: req.body.organizationId
    })
      .then(dbStudent => res.json(dbStudent))
      .catch(err => res.status(422).json(err));
  },

  deleteStudent: function(req, res) {
    db.Student.destroy({
      where: {
        id: req.params.studentId,
      },
    })
      .then(dbStudent => res.json(dbStudent))
      .catch(err => res.status(422).json(err));
  },

  updateStudent: function(req,res){
    db.Student.update({
      name: req.body.name,
      address: req.body.address,
      dob: req.body.dob,
      notes: req.body.notes,
      allergies: req.body.allergies,
      medication: req.body.medication,
      doctor: req.body.doctor
    },{
      where:
      {
        id:req.params.studentId
      }
    })
      .then(dbStudent => res.json(dbStudent))
      .catch(err => res.status(422).json(err));
  },

  getStudentInfo: function(req,res){
    db.Student.findOne({
      where:{
        id:req.params.studentId
      }
    }).then(dbStudent => res.json(dbStudent))
    .catch(err => res.status(422).json(err));
  },

/************student**************/

/************parents**************/
  getAllParents: function(req, res) {
    db.Parent.findAll({})
      .then(dbParents => res.json(dbParents))
      .catch(err => res.status(422).json(err));
  },

  saveParent: function(req, res) {
    db.Parent.create({
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      StudentId: req.params.studentId,
    })
      .then(dbParent => res.json(dbParent))
      .catch(err => res.status(422).json(err));
  },

  getStudentParentInfo: function(req,res){
    db.Parent.findAll({
      where:{
        StudentId: req.params.studentId
      }
    }).then(dbParent => res.json(dbParent))
    .catch(err => res.status(422).json(err));
  },

  updateParent: function(req,res){
    db.Parent.update({
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone
    },{
      where:{
        id:req.params.parentId
      }
    })
      .then(dbParent => res.json(dbParent))
      .catch(err => res.status(422).json(err));
  },
/************parents**************/

/************pickups**************/
  
  savePickup:function(req, res) {
    db.Pickup.create({
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      StudentId: req.params.studentId,
    })
      .then(dbPickup => res.json(dbPickup))
      .catch(err => res.status(422).json(err));
  },

  getStudentPickupInfo: function(req,res){
    db.Pickup.findAll({
      where:{
        StudentId: req.params.studentId
      }
    }).then(dbPickup => res.json(dbPickup))
    .catch(err => res.status(422).json(err));
  },

  updatePickup: function(req,res){
    db.Pickup.update({
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone
    },{
      where:{
        id:req.params.pickupId
      }
    })
      .then(dbPickup => res.json(dbPickup))
      .catch(err => res.status(422).json(err));
  },

  deletePickup: function(req,res){
    db.Pickup.destroy({
      where:{
        id:req.params.pickupId
      }
    })
  },
/************pickups**************/
  
/************report**************/
  getReport: function(req, res) {
    db.Report.findAll({
      include: [db.Diapering],
      where: {
        StudentID: req.params.studentId,
        date: req.params.date,
      },
    })
      .then(dbReport => res.json(dbReport))
      .catch(err => res.status(422).json(err));
  },

  saveReport: function(req,res){
    db.Report.create({
      StudentId: req.params.studentId,
      date:req.body.date,
      napStartTime: req.body.napStartTime,
      napEndTime: req.body.napEndTime,
      highlight: req.body.highlight,
      noteForParents: req.body.noteForParents,
      meal1Time: req.body.meal1Time,
      meal1Food : req.body.meal1Food,
      meal2Time: req.body.meal2Time,
      meal2Food : req.body.meal2Food,
      meal3Time: req.body.meal3Time,
      meal3Food : req.body.meal3Food,
      meal4Time: req.body.meal4Time,
      meal4Food : req.body.meal4Food,
      meal5Time: req.body.meal5Time,
      meal5Food : req.body.meal5Food,
      meal6Time: req.body.meal6Time,
      meal6Food : req.body.meal6Food,
      attendance: req.body.attendance
    }).then(dbReport => res.json(dbReport))
    .catch(err => res.status(422).json(err));
  },

  updateReport: function(req,res){
    db.Report.update({
      napStartTime: req.body.napStartTime,
      napEndTime: req.body.napEndTime,
      highlight: req.body.highlight,
      noteForParents: req.body.noteForParents,
      meal1Time: req.body.meal1Time,
      meal1Food : req.body.meal1Food,
      meal2Time: req.body.meal2Time,
      meal2Food : req.body.meal2Food,
      meal3Time: req.body.meal3Time,
      meal3Food : req.body.meal3Food,
      meal4Time: req.body.meal4Time,
      meal4Food : req.body.meal4Food,
      meal5Time: req.body.meal5Time,
      meal5Food : req.body.meal5Food,
      meal6Time: req.body.meal6Time,
      meal6Food : req.body.meal6Food,
      attendance: req.body.attendance
    },{
      where:
      {
        id:req.params.reportId
      }
    }).then(dbReport => res.json(dbReport))
    .catch(err => res.status(422).json(err));
  },
/************report**************/

/************diapering**************/
  getDiapering: function(req,res){
    db.Diapering.findAll({
      where:{
        ReportId: req.params.reportId
      }
    }).then(dbDiapering => res.json(dbDiapering))
    .catch(err => res.status(422).json(err));
  },

  saveDiapering: function(req,res){
    db.Diapering.create({
      place: req.body.place,
      type:req.body.type,
      time:req.body.time,
      ReportId: req.params.reportId
    }).then(dbDiapering => res.json(dbDiapering))
    .catch(err => res.status(422).json(err));

  },
/************diapering**************/

/************invoice**************/

createInvoice: function(req,res){
  db.Invoice.create({
    StudentId: req.params.studentId,
    month:req.body.month,
    amount:req.body.amount
  }).then(dbInvoice => res.json(dbInvoice))
  .catch(err => res.status(422).json(err));
},

updateInvoice: function(req,res){
  db.Invoice.update({
    month:req.body.month,
    amount:req.body.amount
  },{
    where:{
      id:req.params.invoiceId
    }
  }).then(dbInvoice => res.json(dbInvoice))
  .catch(err => res.status(422).json(err));
},
/************invoice**************/

/************fixedsnack**************/
saveSnacks: function(req,res){
  db.Snack.create({
    day:req.body.day,
    morningSnack: req.body.morningSnack,
    lunch: req.body.lunch,
    afternoonSnack: req.body.afternoonSnack,
    eveningSnack: req.body.eveningSnack
  }).then(dbSnack => res.json(dbSnack))
  .catch(err => res.status(422).json(err));
},

updateSnacks: function(req,res){
  db.Snack.update({
    day:req.body.day,
    morningSnack: req.body.morningSnack,
    lunch: req.body.lunch,
    afternoonSnack: req.body.afternoonSnack,
    eveningSnack: req.body.eveningSnack
  },{
    where:{
      id:req.params.snackId
    }
  }).then(dbSnack => res.json(dbSnack))
  .catch(err => res.status(422).json(err));
}
/************fixedsnack**************/

};
