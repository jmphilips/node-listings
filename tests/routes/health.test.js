import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../../src/index'

chai.use(chaiHttp)
chai.should()

describe('/health', () => {
    it('should check the status of the application', () => {
        chai.request(app)
            .get('/health')
            .end((err, res) => {
                res.should.have.status(204)
            })
    })
})
