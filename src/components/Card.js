import React from 'react'
import '../css/Card.css'

const Card = () => {
  return (
    <div class="team-boxed">
    <div class="container">
        <div class="intro">
            <h2 class="text-center">Team </h2>
            <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
        </div>
        <div class="row people">
            <div class="col-md-6 col-lg-4 item">
                <div class="box"><img class="rounded-circle" src="https://media.istockphoto.com/photos/asian-college-student-picture-id138017387?k=20&m=138017387&s=612x612&w=0&h=8_UuWJNQpmFvfDjRvdt3B-RVdwKGuzepAm-emyLuwrU="/>
                    <h3 class="name">Ben Johnson</h3>
                    <p class="title">Musician</p>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
                <div class="box"><img class="rounded-circle" src="https://media.istockphoto.com/photos/portrait-of-happy-casual-asian-girl-student-with-backpack-and-laptop-picture-id1318876406?k=20&m=1318876406&s=612x612&w=0&h=0NIrxHIuH_uKKZnNzDlDALLmsKUpblgcgwTndOMfzE8="/>
                    <h3 class="name">Emily Clark</h3>
                    <p class="title">Artist</p>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
                <div class="box"><img class="rounded-circle" src="https://media.istockphoto.com/photos/indian-young-girl-stock-images-picture-id1222372717?k=20&m=1222372717&s=612x612&w=0&h=6sor8muw3pnAxswW4k3SRuFQoWQ6iot8hqWej_hh3qA="/>
                    <h3 class="name">Carl Kent</h3>
                    <p class="title">Stylist</p>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card