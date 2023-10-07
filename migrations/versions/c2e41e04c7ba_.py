"""empty message

Revision ID: c2e41e04c7ba
Revises: 1a3fbd5b2ce5
Create Date: 2023-10-03 01:51:46.514868

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c2e41e04c7ba'
down_revision = '1a3fbd5b2ce5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.alter_column('image',
               existing_type=sa.VARCHAR(length=1700),
               nullable=True)
        batch_op.alter_column('price',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=4, asdecimal=2),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.alter_column('price',
               existing_type=sa.Float(precision=4, asdecimal=2),
               type_=sa.REAL(),
               existing_nullable=False)
        batch_op.alter_column('image',
               existing_type=sa.VARCHAR(length=1700),
               nullable=False)

    # ### end Alembic commands ###