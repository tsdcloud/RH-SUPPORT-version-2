from rest_framework.authentication import BaseAuthentication, get_authorization_header
from rest_framework.exceptions import AuthenticationFailed
import requests  # Import for external API call

class BearerAuthentication(BaseAuthentication):

    keyword = 'Bearer'

    def authenticate(self, request, view):
        auth = get_authorization_header(request)

        if not auth or not auth.startswith(self.keyword):
            return None

        token = auth.split()[1]  # Extract token from Bearer header

        # Replace with your external API verification logic
        # This example assumes a simple GET request to another API
        verification_url = 'https://your-external-api.com/verify-user/' + token
        response = requests.get(verification_url)

        if response.status_code == 200:
            # User verified, return request object
            return request, None
        else:
            raise AuthenticationFailed('Invalid or unauthorized token')
