test:
        mocha
test-jenkins:
        mocha -R tap
tdd:
        watch -n 2 --color mocha -c

.PHONY: test
.PHONY: tdd
.PHONY: test-jenkins
