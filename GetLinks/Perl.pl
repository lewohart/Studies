use LWP;
use feature 'say';

my $agent = new LWP::UserAgent();
my $response = $agent->get('http://www.stroustrup.com/C++.html');

say for $response->content =~ m<"(https?://.+?)">g;