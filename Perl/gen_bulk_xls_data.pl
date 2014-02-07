use Excel::Writer::XLSX;
use File::Copy;

my $batch_files_count = 250;
my $batch_file_start = 100149;
my $num_students_per_batch=30;
my $stu_start = 1009470;
my $batch_file_end = $batch_file_start + $batch_files_count;
my $i = $batch_file_start;

# Main loop. creates xlsx files
while ($i < $batch_file_end) {
	$i = $i + 1;
	# Create a new Excel workbook
	my $file_name = sprintf("for_demo_batch_%06d.xlsx", $i);
	printf $file_name;
	printf "\n";
	my $workbook = Excel::Writer::XLSX->new( $file_name );

	#
	# Add a worksheet
	$worksheet = $workbook->add_worksheet();

	$col = $row = 0;

	$worksheet->write( $row, $col, 'First Name' );
	$worksheet->write( $row, 1, 'Last Name' );
	$worksheet->write( $row, 2, 'Email Address' );
	$worksheet->write( $row, 3, 'User Name' );

	# Sub loop. creates rows within the xls 
	for ($row = 1; $row <= $num_students_per_batch; $row++) {
	
		my $stu_num = $stu_start + $row;
		
		my $fname = sprintf("fname_%06d", $stu_num);
		$worksheet->write( $row, 0, $fname );

		my $lname = sprintf("lname_%06d", $stu_num);
		$worksheet->write( $row, 1, $lname );

		my $email = sprintf("my_stu%06d\@xyz.com", $stu_num);
		$worksheet->write( $row, 2, $email );
		
		my $uname = sprintf("STU__TEST__%06d", $stu_num);
		$worksheet->write( $row, 3, $uname );


	} # end Sub loop	

# next xls should start with a unique student start	
$stu_start = $stu_start + $num_students_per_batch;

} # end Main loop
