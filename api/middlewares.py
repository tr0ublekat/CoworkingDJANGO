class DisableCSRFForAPI:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith('/api/'):  # Укажите путь для API
            setattr(request, '_dont_enforce_csrf_checks', True)
        return self.get_response(request)