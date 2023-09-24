import './teams.css'
const Teams = () => {
  return (
    <div class="table-wrapper-scroll-y my-custom-scrollbar ml-2">
      <table class="table table-bordered table-striped mb-0">
        <thead>
          <tr>
            <th scope="col">Teams</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="d-flex justify-content-between align-items-center">
              <span>Mark</span>
              <div>

                <button type="button" class="btn btn-success m2-2">
                  Verify
                </button>
                <button type="button" class="btn btn-danger mr-2">
                  Decline
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="d-flex justify-content-between align-items-center">
              <span>Mark</span>
              <div>
                <button type="button" class="btn btn-success ml-2">
                  Verify
                </button>
                <button type="button" class="btn btn-danger">
                  Decline
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="d-flex justify-content-between align-items-center">
              <span>Mark</span>
              <div>
                <button type="button" class="btn btn-success ml-2">
                  Verify
                </button>
                <button type="button" class="btn btn-danger">
                  Decline
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="d-flex justify-content-between align-items-center">
              <span>Mark</span>
              <div>
                <button type="button" class="btn btn-success ml-2">
                  Verify
                </button>
                <button type="button" class="btn btn-danger">
                  Decline
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="d-flex justify-content-between align-items-center">
              <span>Mark</span>
              <div>
                <button type="button" class="btn btn-success ml-2">
                  Verify
                </button>
                <button type="button" class="btn btn-danger">
                  Decline
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="d-flex justify-content-between align-items-center">
              <span>Mark</span>
              <div>
                <button type="button" class="btn btn-success ml-2">
                  Verify
                </button>
                <button type="button" class="btn btn-danger">
                  Decline
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Teams