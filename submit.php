<?
if(isset($_GET['x']) && isset($_GET['y']) && isset($_GET['y'])){
    $result=[];
    $check = 0;
    $start = microtime(true);
    if($_GET['x']>=0 && $_GET['x']<=$_GET['r']/2 &&
       $_GET['y']>=0 && $_GET['y']<=$_GET['r']
       
       ||

       $_GET['x']<0 && $_GET['y']<0 &&
       $_GET['y']>=-$_GET['x']-$_GET['r']

       ||
       $_GET['x']<0 && $_GET['y']>0 &&
       $_GET['y']*$_GET['y']<=$_GET['r']/2*$_GET['r']/2-$_GET['x']*$_GET['x']
       ) {
        $check = 1;
       }
    $time = number_format(microtime(true)-$start,6);
    $dt = new DateTime("now", new DateTimeZone('Europe/Moscow'));
    $result = ['success'=> $check, 'x'=>$_GET['x'],'y'=>$_GET['y'],'r'=>$_GET['r'],'diff'=>$time, 'time'=>$dt];
    die( json_encode( $result ));
}