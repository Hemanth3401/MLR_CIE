<?php 
                        $dir= 'images\pics2';
                        $imgs= scandir($dir);
                        $count= count($imgs);

                        ?>
<?php
                    for($i=2;$i<=$count;$i++){
                        $imgsss=$imgs[$i];
                        $imgss= rtrim($imgsss, ".PNG");
                        $imga = explode("-",$imgss);
                        $imgn= $imga[0];
                        $imgd= $imga[1];
                        ?>

<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 team-listing wow fadeInUp" data-wow-duration="1s"
    data-wow-delay="0.8s">
    <img class="team-media" src="images\pics2\<?php echo $imgsss ?>" alt="<?php echo $imgn ?>" />
    <div class="team-overlay">
        <h3 class="team-overlay-title text-light"><?php echo $imgn ?></h3>
        <p class="team-overlay-designation"><?php echo $imgd ?></p>
    </div>
</div>
<?php 
                    }
                    ?>