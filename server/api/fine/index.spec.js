'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var fineCtrlStub = {
  index: 'fineCtrl.index',
  show: 'fineCtrl.show',
  create: 'fineCtrl.create',
  update: 'fineCtrl.update',
  destroy: 'fineCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var fineIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './fine.controller': fineCtrlStub
});

describe('Fine API Router:', function() {

  it('should return an express router instance', function() {
    expect(fineIndex).to.equal(routerStub);
  });

  describe('GET /api/fines', function() {

    it('should route to fine.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'fineCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/fines/:id', function() {

    it('should route to fine.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'fineCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/fines', function() {

    it('should route to fine.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'fineCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/fines/:id', function() {

    it('should route to fine.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'fineCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/fines/:id', function() {

    it('should route to fine.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'fineCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/fines/:id', function() {

    it('should route to fine.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'fineCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
