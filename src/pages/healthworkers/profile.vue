<template>
  <div>
    <Breadcrumbs main="Users" title="User Profile" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="user-profile">
        <div class="row">
          <!-- user profile first-style start-->
          <div class="col-sm-12">
            <div class="text-center card hovercard" style="margin-top: 5em">
              <!-- <div class="cardheader"></div> -->
              <div class="user-image">
                <div class="avatar">
                  <img alt="" src="../../assets/images/user/7.jpg" />
                </div>
                <div class="icon-wrapper">
                  <i class="icofont icofont-pencil-alt-5"></i>
                </div>
              </div>
              <div class="info">
                <div class="row">
                  <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="text-left ttl-info">
                          <h6><i class="mr-2 fa fa-envelope"></i>Email</h6>
                          <span>Marekjecno@yahoo.com</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="text-left ttl-info">
                          <h6><i class="mr-2 fa fa-calendar"></i>BOD</h6>
                          <span>02 January 1988</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                    <div class="user-designation">
                      <div class="title">
                        <a target="_blank" href="">Mark jecno</a>
                      </div>
                      <div class="mt-2 desc">designer</div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="text-left ttl-info">
                          <h6><i class="mr-2 fa fa-phone"></i>Contact Us</h6>
                          <span>India +91 123-456-7890</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="text-left ttl-info">
                          <h6>
                            <i class="mr-2 fa fa-location-arrow"></i>Location
                          </h6>
                          <span>B69 Near Schoool Demo Home</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="social-media">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#"><i class="fa fa-google-plus"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#"><i class="fa fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#"><i class="fa fa-rss"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="follow">
                  <div class="row">
                    <div class="col-6 text-md-right border-right">
                      <div class="follow-num counter">25869</div>
                      <span>Follower</span>
                    </div>
                    <div class="col-6 text-md-left">
                      <div class="follow-num counter">659887</div>
                      <span>Following</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h4 class="mb-0 card-title">Add projects And Upload</h4>
                <div class="card-options">
                  <a
                    class="card-options-collapse"
                    href="#"
                    data-toggle="card-collapse"
                    ><i class="fe fe-chevron-up"></i></a
                  ><a
                    class="card-options-remove"
                    href="#"
                    data-toggle="card-remove"
                    ><i class="fe fe-x"></i
                  ></a>
                </div>
              </div>
              <div class="mb-0 table-responsive">
                <table class="table card-table table-vcenter text-nowrap">
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a class="text-inherit" href="#"
                          >Untrammelled prevents
                        </a>
                      </td>
                      <td>28 May 2018</td>
                      <td>
                        <span class="status-icon bg-success"></span> Completed
                      </td>
                      <td>$56,908</td>
                      <td class="text-right">
                        <a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-primary btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-pencil"></i> Edit</a
                        ><a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-transparent btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-link"></i> Update</a
                        ><a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-danger btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-trash"></i> Delete</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a class="text-inherit" href="#"
                          >Untrammelled prevents</a
                        >
                      </td>
                      <td>12 June 2018</td>
                      <td>
                        <span class="status-icon bg-danger"></span> On going
                      </td>
                      <td>$45,087</td>
                      <td class="text-right">
                        <a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-primary btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-pencil"></i> Edit</a
                        ><a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-transparent btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-link"></i> Update</a
                        ><a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-danger btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-trash"></i> Delete</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a class="text-inherit" href="#"
                          >Untrammelled prevents</a
                        >
                      </td>
                      <td>12 July 2018</td>
                      <td>
                        <span class="status-icon bg-warning"></span> Pending
                      </td>
                      <td>$60,123</td>
                      <td class="text-right">
                        <a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-primary btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-pencil"></i> Edit</a
                        ><a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-transparent btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-link"></i> Update</a
                        ><a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-danger btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-trash"></i> Delete</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a class="text-inherit" href="#"
                          >Untrammelled prevents</a
                        >
                      </td>
                      <td>14 June 2018</td>
                      <td>
                        <span class="status-icon bg-warning"></span> Pending
                      </td>
                      <td>$70,435</td>
                      <td class="text-right">
                        <a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-primary btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-pencil"></i> Edit</a
                        ><a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-transparent btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-link"></i> Update</a
                        ><a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-danger btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-trash"></i> Delete</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a class="text-inherit" href="#"
                          >Untrammelled prevents</a
                        >
                      </td>
                      <td>25 June 2018</td>
                      <td>
                        <span class="status-icon bg-success"></span> Completed
                      </td>
                      <td>$15,987</td>
                      <td class="text-right">
                        <a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-primary btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-pencil"></i> Edit</a
                        ><a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-transparent btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-link"></i> Update</a
                        ><a class="icon" href="javascript:void(0)"></a
                        ><a
                          class="btn btn-danger btn-sm"
                          href="javascript:void(0)"
                          ><i class="fa fa-trash"></i> Delete</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import users from "@/data/users";
export default {
  data() {
    return {
      users,
      basic: {
        currentPage: 1,
        totalPages: 0,
      },
    };
  },
};
</script>