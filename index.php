<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đào Hường</title>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css" />
    <script type="module" src="script.js"></script>
</head>

<body>
<?php
    echo '<div class="container">
        <h2 class="mt-5 mb-5" style="text-align: center;">Product</h2>
        <form action="" id="form-data">
            <div class="mb-5">
                <div class="row">
                    <div class="form-group col-md-6 mb-3">
                        <p>Name</p>
                        <input type="text" class="form-control" name="name" placeholder="Enter Name" id="name">
                        <p class="text-red error name-error"></p>
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <p>Price</p>
                        <input type="text" class="form-control" name="price" placeholder="Enter Price" id="price">
                        <p class="text-red error price-error"></p>
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <p>Detail</p>
                        <input type="text" class="form-control" name="detail" placeholder="Enter Detail" id="detail">
                        <p class="text-red error detail-error"></p>
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <p>Color</p>
                        <input type="text" class="form-control" name="color" placeholder="Enter Color" id="color">
                        <p class="text-red error color-error"></p>
                    </div>
                    <div class="col-lg-12 mt-5">
                        <button type="button" class="btn btn-success" id="submit">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        <hr>

        <div class="row mt-5">
            <div class="col-12">
                <table class="table table-bordered">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Detail</th>
                        <th>Color</th>
                        <th>Actions</th>
                    </tr>
                    <tbody id="tbody">
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button class="btn btn-warning btn-edit">Edit</button>
                                <button class="btn btn-danger btn-delete m-2">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>';
?>
</body>

</html>