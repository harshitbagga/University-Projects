<div class="content-section">
                <div class="container-liquid">
                    <div class="row">
                        <div class="col-xs-12">
						<?php if ($this->session->flashdata('error')) { ?>
                            <div class="alert alert-danger">
                                <strong>Error!</strong> <?php echo $this->session->flashdata('error'); ?>
                            </div>
                        <?php }elseif($this->session->flashdata('success')){ ?>
						 <div class="alert alert-success">
                                <strong>Success!</strong> <?php echo $this->session->flashdata('success'); ?>
                            </div>
						<?php
							  }
						?>
                            <div class="sec-box">
                                <header>
                                    <h2 class="heading"><?php echo $title; ?></h2>
                                </header>
                                <div class="contents">
                                    <div class="table-box">
									<form class="form-horizontal" action="<?php echo base_url('index.php/dashboard/change_password'); ?>" enctype="multipart/form-data" id="service_form" name="service_form" method="post">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="col-md-4">Description</th>
                                                    <th class="col-md-8">Form Elements</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="col-md-4">Old Password</td>
                                                    <td class="col-md-8"><input type="password" placeholder="Old Password" name="opwd" id="opwd" class="form-control"><?php echo form_error('opwd','<p class="error">'); ?></td>
                                                </tr>
                                                <tr>
                                                    <td class="col-md-4">New Password</td>
                                                    <td class="col-md-8"><input type="password" name="npwd" id="npwd" value="" class="form-control" placeholder='New Password'/><?php echo form_error('npwd','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-12" colspan="2" style="text-align:center;"><button type="submit" name="btnsubmit" id="btnsubmit" class="btn btn-primary">Save</button>
</td>
                                                </tr>
                                            </tbody>
                                        </table>
									</form>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Row End -->
                </div>
            </div>
<script>
<?php echo $validation_script; ?>
</script>