let testSession = {
    "apiVersion": "tilt.dev/v1alpha1",
    "kind": "Session",
    "metadata": {
        "creationTimestamp": "2021-05-14T16:38:40Z",
        "name": "Tiltfile",
        "resourceVersion": "26",
        "uid": "cb8f3f1f-49fd-471f-82da-c98dcad57eeb"
    },
    "spec": {
        "exitCondition": "manual",
        "tiltfilePath": "/home/nick/src/tilt.build/Tiltfile"
    },
    "status": {
        "done": false,
        "pid": 1703147,
        "startTime": "2021-05-14T16:38:40.300049Z",
        "targets": [
            {
                "name": "blog-site:runtime",
                "resources": [
                    "blog-site"
                ],
                "state": {
                    "active": {
                        "ready": true,
                        "startTime": "2021-05-14T16:39:07.000000Z"
                    }
                },
                "type": "server"
            },
            {
                "name": "blog-site:update",
                "resources": [
                    "blog-site"
                ],
                "state": {
                    "terminated": {
                        "finishTime": "2021-05-14T16:39:07.287648Z",
                        "startTime": "2021-05-14T16:38:54.636908Z"
                    }
                },
                "type": "job"
            },
            {
                "name": "docs-site:runtime",
                "resources": [
                    "docs-site"
                ],
                "state": {
                    "active": {
                        "ready": true,
                        "startTime": "2021-05-14T16:39:03.000000Z"
                    }
                },
                "type": "server"
            },
            {
                "name": "docs-site:update",
                "resources": [
                    "docs-site"
                ],
                "state": {
                    "terminated": {
                        "finishTime": "2021-05-14T16:39:03.266213Z",
                        "startTime": "2021-05-14T16:38:54.630507Z"
                    }
                },
                "type": "job"
            },
            {
                "name": "gem-update:update",
                "resources": [
                    "gem-update"
                ],
                "state": {},
                "type": "job"
            },
            {
                "name": "make-api:update",
                "resources": [
                    "make-api"
                ],
                "state": {
                    "terminated": {
                        "finishTime": "2021-05-14T16:38:43.651669Z",
                        "startTime": "2021-05-14T16:38:41.235395Z"
                    }
                },
                "type": "job"
            },
            {
                "name": "make-stars:update",
                "resources": [
                    "make-stars"
                ],
                "state": {
                    "terminated": {
                        "finishTime": "2021-05-14T16:38:44.288901Z",
                        "startTime": "2021-05-14T16:38:43.652952Z"
                    }
                },
                "type": "job"
            },
            {
                "name": "tilt-site:runtime",
                "resources": [
                    "tilt-site"
                ],
                "state": {
                    "active": {
                        "ready": true,
                        "startTime": "2021-05-14T16:38:54.000000Z"
                    }
                },
                "type": "server"
            },
            {
                "name": "tilt-site:update",
                "resources": [
                    "tilt-site"
                ],
                "state": {
                    "terminated": {
                        "finishTime": "2021-05-14T16:38:54.628585Z",
                        "startTime": "2021-05-14T16:38:44.290223Z"
                    }
                },
                "type": "job"
            },
            {
                "name": "tilt:inspector:serve",
                "resources": [
                    "tilt:inspector"
                ],
                "state": {
                    "active": {
                        "ready": true,
                        "startTime": "2021-05-14T16:38:41.240043Z"
                    }
                },
                "type": "server"
            },
            {
                "name": "tilt:inspector:update",
                "resources": [
                    "tilt:inspector"
                ],
                "state": {
                    "terminated": {
                        "finishTime": "2021-05-14T16:38:41.234125Z",
                        "startTime": "2021-05-14T16:38:40.415829Z"
                    }
                },
                "type": "job"
            },
            {
                "name": "tiltfile:update",
                "resources": [
                    "(Tiltfile)"
                ],
                "state": {
                    "terminated": {
                        "finishTime": "2021-05-14T16:38:40.410088Z",
                        "startTime": "2021-05-14T16:38:40.389282Z"
                    }
                },
                "type": "job"
            }
        ]
    }
}
