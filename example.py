import logging


class E(Exception):
    pass

try:
    raise E('my message')
except E:
    logging.exception('something bad happened'
)
