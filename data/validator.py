# This validates the CSV file. If there is a malformed row, it retunrs a failure
# and points out which line this happened on.

import csv
import sys
from itertools import islice

def main():
    if len(sys.argv) != 2:
        print "Expected use: validator.py"
        return

    with open(sys.argv[1]) as f:
        reader = csv.reader(f)

        length = len(reader.next())
        for index, row in enumerate(reader):
            if len(row) != length:
                print "row ", index, "is misformed. Not long enough"
                return

    print "CSV File looks fine"

if __name__ == "__main__":
    main() 

